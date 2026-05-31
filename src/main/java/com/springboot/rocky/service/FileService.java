package com.springboot.rocky.service;

import com.springboot.rocky.config.AppConfig;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.nio.file.StandardOpenOption;
import java.util.List;
import java.util.Comparator;
import java.util.stream.Stream;

@Service
public class FileService {

    private static final String SESSION_FILE_NAME = "session.json";

    /**
     * 사용자의 코드를 물리 파일로 저장합니다.
     */
    public Path saveCode(String userId, String language, String code) throws IOException {
        // 1. 사용자별 작업 디렉토리 설정 (/opt/rocky-build/work/{userId})
        Path userWorkPath = Paths.get(AppConfig.HOST_WORK_DIR, userId);
        
        // 2. 디렉토리가 없으면 생성 (부모 디렉토리까지 한꺼번에 생성)
        if (!Files.exists(userWorkPath)) {
            Files.createDirectories(userWorkPath);
        }

        // 3. 언어별 파일명 결정 (switch expression 활용)
        String fileName = switch (language.toLowerCase()) {
            case "cpp" -> "main.cpp";
            case "java" -> "Main.java";
            case "python" -> "script.py";
            default -> "code.txt";
        };

        // 4. 파일 쓰기
        Path filePath = userWorkPath.resolve(fileName);
        Files.writeString(filePath, code);
        
        return filePath;
    }

    public Path saveSessionCode(String sessionId, String language, String baseName, String code) throws IOException {
        Path sessionPath = Paths.get(AppConfig.HOST_SESSION_DIR, sessionId);
        if (!Files.exists(sessionPath)) {
            Files.createDirectories(sessionPath);
        }

        String fileName = (baseName == null || baseName.isBlank()) ? resolveFileName(language, null) : baseName + getExtension(language);
        Path filePath = sessionPath.resolve(fileName);
        Files.writeString(filePath, code, StandardOpenOption.CREATE, StandardOpenOption.TRUNCATE_EXISTING, StandardOpenOption.WRITE);
        return filePath;
    }

    public Path saveSessionMeta(String sessionId, String json) throws IOException {
        Path sessionPath = Paths.get(AppConfig.HOST_SESSION_DIR, sessionId);
        if (!Files.exists(sessionPath)) {
            Files.createDirectories(sessionPath);
        }

        Path filePath = sessionPath.resolve(SESSION_FILE_NAME);
        Files.writeString(filePath, json, StandardOpenOption.CREATE, StandardOpenOption.TRUNCATE_EXISTING, StandardOpenOption.WRITE);
        return filePath;
    }

    public void deleteSession(String sessionId) throws IOException {
        Path sessionPath = Paths.get(AppConfig.HOST_SESSION_DIR, sessionId);
        if (!Files.exists(sessionPath)) return;

        try (Stream<Path> walk = Files.walk(sessionPath)) {
            List<Path> paths = walk.sorted(Comparator.reverseOrder()).toList();
            for (Path path : paths) {
                Files.deleteIfExists(path);
            }
        }
    }

    public String resolveFileName(String language, String userId) {
        String normalizedUserId = (userId == null || userId.isBlank()) ? "rocky_user" : userId.replaceAll("[^a-zA-Z0-9_-]", "_");
        return normalizedUserId + getExtension(language);
    }

    private String getExtension(String language) {
        return switch (language == null ? "" : language.toLowerCase()) {
            case "cpp" -> ".cpp";
            case "java" -> ".java";
            case "python" -> ".py";
            default -> ".txt";
        };
    }
}
