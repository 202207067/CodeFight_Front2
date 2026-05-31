package com.springboot.rocky.controller;

import com.springboot.rocky.dto.CodeRequest;
import com.springboot.rocky.dto.BuildResponse;
import com.springboot.rocky.dto.BattleSessionRequest;
import com.springboot.rocky.dto.BattleProblemSnapshot;
import com.springboot.rocky.service.FileService;
import com.springboot.rocky.service.DockerService;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;
import java.util.List;

@RestController
@RequestMapping("/api/v1/build")
public class BuildController {

    private final DockerService dockerService;
    private final FileService fileService;

    public BuildController(DockerService dockerService, FileService fileService) {
        this.dockerService = dockerService;
        this.fileService = fileService;
    }

    @PostMapping("/run")
    public BuildResponse runBuild(@RequestBody CodeRequest request) {
        
        // [선택사항 반영] 모든 필수 파라미터 null 및 빈값 체크
        if (isInvalid(request.getUserId()) || isInvalid(request.getLanguage()) || isInvalid(request.getCode())) {
            BuildResponse response = new BuildResponse();
            response.setSuccess(false);
            response.setError("Missing required fields: userId, language, and code are all required.");
            return response;
        }

        try {
            // DockerService 실행
            String result = dockerService.run(
                request.getUserId(), 
                request.getLanguage(), 
                request.getCode()
            );

            // 결과 분석
            boolean isSuccess = result != null && 
                               !result.startsWith("Error") && 
                               !result.startsWith("Server Error");

            BuildResponse response = new BuildResponse();
            response.setSuccess(isSuccess);
            response.setOutput(isSuccess ? result : null);
            response.setError(isSuccess ? null : result);
            return response;

        } catch (Exception e) {
            BuildResponse response = new BuildResponse();
            response.setSuccess(false);
            response.setError("Controller Exception: " + e.getMessage());
            return response;
        }
    }

    @PostMapping("/session/save")
    public BuildResponse saveSession(@RequestBody BattleSessionRequest request) {
        BuildResponse response = new BuildResponse();
        if (isInvalid(request.getSessionId()) || isInvalid(request.getUserId())) {
            response.setSuccess(false);
            response.setError("Missing required fields: sessionId and userId are required.");
            return response;
        }

        try {
            List<BattleProblemSnapshot> problems = request.getProblems();
            if (problems != null) {
                for (int i = 0; i < problems.size(); i++) {
                    BattleProblemSnapshot problem = problems.get(i);
                    if (problem == null) continue;
                    String code = problem.getCode() == null ? "" : problem.getCode();
                    fileService.saveSessionCode(request.getSessionId(), request.getLanguage(), "problem-" + i, code);
                }
            }

            String json = toSessionJson(request);
            fileService.saveSessionMeta(request.getSessionId(), json);
            response.setSuccess(true);
            response.setOutput("session saved");
            return response;
        } catch (IOException e) {
            response.setSuccess(false);
            response.setError("Failed to save session: " + e.getMessage());
            return response;
        }
    }

    @DeleteMapping("/session/{sessionId}")
    public BuildResponse deleteSession(@PathVariable String sessionId) {
        BuildResponse response = new BuildResponse();
        if (isInvalid(sessionId)) {
            response.setSuccess(false);
            response.setError("Missing required field: sessionId");
            return response;
        }

        try {
            fileService.deleteSession(sessionId);
            response.setSuccess(true);
            response.setOutput("session deleted");
            return response;
        } catch (IOException e) {
            response.setSuccess(false);
            response.setError("Failed to delete session: " + e.getMessage());
            return response;
        }
    }

    // 편의를 위한 검증 메서드
    private boolean isInvalid(String value) {
        return value == null || value.trim().isEmpty();
    }

    private String toSessionJson(BattleSessionRequest request) {
        StringBuilder json = new StringBuilder();
        json.append("{");
        json.append("\"sessionId\":\"").append(escape(request.getSessionId())).append("\",");
        json.append("\"userId\":\"").append(escape(request.getUserId())).append("\",");
        json.append("\"language\":\"").append(escape(request.getLanguage())).append("\",");
        json.append("\"roomId\":\"").append(escape(request.getRoomId())).append("\",");
        json.append("\"status\":\"").append(escape(request.getStatus())).append("\",");
        json.append("\"currentIndex\":\"").append(escape(request.getCurrentIndex())).append("\",");
        json.append("\"remaining\":\"").append(escape(request.getRemaining())).append("\",");
        json.append("\"problemCount\":").append(request.getProblems() == null ? 0 : request.getProblems().size());
        json.append("}");
        return json.toString();
    }

    private String escape(String value) {
        if (value == null) return "";
        return value.replace("\\", "\\\\").replace("\"", "\\\"");
    }
}
