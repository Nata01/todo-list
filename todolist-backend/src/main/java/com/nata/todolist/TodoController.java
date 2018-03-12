package com.nata.todolist;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
public class TodoController {
    private final TodoRepository todoRepository;

    public TodoController(TodoRepository todoRepository) {
        this.todoRepository = todoRepository;
    }

    @GetMapping("/api/todos")
    public Page<Todo> getAll(Pageable pageable) {
        return todoRepository.findAll(pageable);
    }

    @GetMapping("/api/todos/{id}")
    public ResponseEntity<Todo> getById(@PathVariable long id) {
        return todoRepository.findById(id)
                .map(ResponseEntity::ok)
                .orElseGet(() -> ResponseEntity.badRequest().build());
    }

    @PostMapping("/api/todos")
    public Todo save(@RequestBody @Validated CreateUpdateTodoForm createUpdateTodoForm) {
        return todoRepository.save(createUpdateTodoForm.toSaveTodo());
    }

    @PutMapping("/api/todos/{id}")
    public Todo update(@PathVariable long id,
                       @RequestBody @Validated CreateUpdateTodoForm createUpdateTodoForm) {
        return todoRepository.save(createUpdateTodoForm.toUpdateTodo(id));
    }

    @DeleteMapping("/api/todos/{id}")
    public ResponseEntity<?> delete(@PathVariable long id) {
        todoRepository.findById(id).ifPresent(todoRepository::delete);
        return ResponseEntity.noContent().build();
    }
}
