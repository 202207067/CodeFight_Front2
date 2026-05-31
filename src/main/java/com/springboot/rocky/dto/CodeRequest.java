package com.springboot.rocky.dto;

public class CodeRequest {
    private String userId;
    private String language;
    private String code;

    public CodeRequest() {
    }

    public CodeRequest(String userId, String language, String code) {
        this.userId = userId;
        this.language = language;
        this.code = code;
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

    public String getCode() {
        return code;
    }

    public void setCode(String code) {
        this.code = code;
    }
}
