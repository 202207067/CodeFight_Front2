package com.springboot.rocky.dto;

public class BuildResponse {
    private boolean success;
    private String output;
    private String error;
    
    public void builder() {
    	
    }
    
    public void setBuildResponse(boolean success, String output, String error) {
        this.success = success;
        this.output = output;
        this.error = error;
    }

    public boolean isSuccess() {
        return success;
    }

    public void setSuccess(boolean success) {
        this.success = success;
    }

    public String getOutput() {
        return output;
    }

    public void setOutput(String output) {
        this.output = output;
    }

    public String getError() {
        return error;
    }

    public void setError(String error) {
        this.error = error;
    }
}
