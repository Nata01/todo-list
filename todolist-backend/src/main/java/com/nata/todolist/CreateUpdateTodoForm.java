package com.nata.todolist;

import lombok.Data;

import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

@Data
public class CreateUpdateTodoForm {
    @NotNull
    @Size(min = 2, max = 280)
    private String description;

    public Todo toUpdateTodo(long id) {
        Todo todo = new Todo(this.description);
        todo.setId(id);
        return todo;
    }

    public Todo toSaveTodo() {
        return new Todo(this.description);
    }
}
