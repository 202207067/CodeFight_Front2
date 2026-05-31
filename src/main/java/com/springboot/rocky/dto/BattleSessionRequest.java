package com.springboot.rocky.dto;

import java.util.List;

public class BattleSessionRequest {
    private String sessionId;
    private String userId;
    private String language;
    private String roomId;
    private String status;
    private String currentIndex;
    private String remaining;
    private List<BattleProblemSnapshot> problems;

    public BattleSessionRequest() {
    }

    public String getSessionId() {
        return sessionId;
    }

    public void setSessionId(String sessionId) {
        this.sessionId = sessionId;
    }

    public String getUserId() {
        return userId;
    }

    public void setUserId(String userId) {
        this.userId = userId;
    }

    public String getLanguage() {
        return language;
    }

    public void setLanguage(String language) {
        this.language = language;
    }

    public String getRoomId() {
        return roomId;
    }

    public void setRoomId(String roomId) {
        this.roomId = roomId;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public String getCurrentIndex() {
        return currentIndex;
    }

    public void setCurrentIndex(String currentIndex) {
        this.currentIndex = currentIndex;
    }

    public String getRemaining() {
        return remaining;
    }

    public void setRemaining(String remaining) {
        this.remaining = remaining;
    }

    public List<BattleProblemSnapshot> getProblems() {
        return problems;
    }

    public void setProblems(List<BattleProblemSnapshot> problems) {
        this.problems = problems;
    }
}
