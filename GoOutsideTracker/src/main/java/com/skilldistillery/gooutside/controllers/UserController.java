package com.skilldistillery.gooutside.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.skilldistillery.gooutside.entities.User;
import com.skilldistillery.gooutside.services.UserService;

@RestController
@RequestMapping("api")
public class UserController {

	@Autowired
	private UserService userSvc;
	
	@GetMapping("allusers")
	public List<User> showAllUsers() {
		return userSvc.findAllUsers();
	}
}
