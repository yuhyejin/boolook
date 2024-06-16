package com.example.bookclub.dto.object;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
@AllArgsConstructor
public class BookListItem {
    private String bookTitle;
    private String bookImg;
    private String author;
    private String issuer;
    private String collLibrary;
    private String isBookLoan;
    private String returnDate;
}
