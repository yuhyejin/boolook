package com.example.bookclub.dto.object;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
@AllArgsConstructor
public class LibraryListItem {
    private int libraryNumber;
    private String libraryName;
    private String libraryUrl;
}
