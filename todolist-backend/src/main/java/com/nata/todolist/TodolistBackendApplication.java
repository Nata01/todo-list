package com.nata.todolist;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class TodolistBackendApplication {

	public static void main(String[] args) {
		SpringApplication.run(TodolistBackendApplication.class, args);
	}

	@Bean
	public CommandLineRunner getCommandLineRunner(TodoRepository todoRepository){
		return args -> {
			todoRepository.save(new Todo("First todo"));
			todoRepository.save(new Todo("Second todo"));
			todoRepository.save(new Todo("Third todo"));
			todoRepository.save(new Todo("Fourth todo"));
			System.out.println(todoRepository.findAll());
		};
	}
}
