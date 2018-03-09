package com.nata.todolist;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

@RestController
public class TodoController {
    private final TodoRepository todoRepository;

    public TodoController(TodoRepository todoRepository) {
        this.todoRepository = todoRepository;
    }

    @GetMapping("/api/todos")
    public Page<Todo> getAll(Pageable pageable){
        return todoRepository.findAll(pageable);
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
}
