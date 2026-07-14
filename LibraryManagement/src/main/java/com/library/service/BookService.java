package com.library.service;

import com.library.repository.BookRepository;

public class BookService {

    private BookRepository bookRepository;

    public void setBookRepository(BookRepository bookRepository) {
        this.bookRepository = bookRepository;
    }

    public void display() {
        System.out.println("BookService is working");

        if (bookRepository != null) {
            System.out.println("BookRepository has been injected successfully.");
        } else {
            System.out.println("BookRepository has NOT been injected.");
        }
    }
}