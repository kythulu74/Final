package com.spring.data;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;


@Controller
@RequestMapping(path = "/item")
public class ItemController {

	/*
	@CrossOrigin(origins = "http://localhost:8080")
    @PostMapping(path = "/add")
    public ResponseEntity<Item> addNewItem(@RequestBody Item item) {
        Item newItem = itemRepository.save(item);
        return ResponseEntity.status(HttpStatus.CREATED).body(newItem);
    }

	@CrossOrigin(origins = "http://localhost:8080")
	@GetMapping(path = "/all")
	public @ResponseBody Iterable<Item> getAllItems() {
		return itemRepository.findAll();
	}
	*/
	
	@CrossOrigin(origins = "http://localhost:8080")
	@GetMapping(path = "/welcome")
	public ResponseEntity<String> showWelcome() {
		String welcomeMessage = "HAVE FUN OUT THERE!";
		return ResponseEntity.status(HttpStatus.OK).body("{\"message\": \"" + welcomeMessage + "\"}");
	}

}