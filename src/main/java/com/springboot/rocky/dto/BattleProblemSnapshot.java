package com.springboot.rocky.dto;

public class BattleProblemSnapshot {
    private String title;
    private String description;
    private String input;
    private String output;
    private String code;

    public BattleProblemSnapshot() {
    }

    public BattleProblemSnapshot(String title, String description, String input, String output, String code) {
        this.title = title;
        this.description = description;
        this.input = input;
        this.output = output;
        this.code = code;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getInput() {
        return input;
    }

    public void setInput(String input) {
        this.input = input;
    }

    public String getOutput() {
        return output;
    }

    public void setOutput(String output) {
        this.output = output;
    }

    public String getCode() {
        return code;
    }

    public void setCode(String code) {
        this.code = code;
    }
}
