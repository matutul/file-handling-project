package com.ashraf.fileHandling.service;

import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

@Service
public class StorageService {
    public String storeFile(MultipartFile file){

        return "success";
    }
}
