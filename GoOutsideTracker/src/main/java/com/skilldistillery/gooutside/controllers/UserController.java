package com.skilldistillery.gooutside.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
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
	@GetMapping("finduser/{id}")
	public User findUser(@PathVariable int id) {
		System.out.println("Trying to find a user with id of " + id);
		User user = userSvc.findUserId(id);
		return user;
	}
	@PostMapping("newuser")
	public User createNewUser(@RequestBody User user) {
		userSvc.createUser(user);
		System.out.println(user);
		return user;
	}
	@PutMapping("updateuser/{id}")
	public User updateUser(@PathVariable int id, @RequestBody User user) {
		userSvc.updateUser(id, user);
		return user;
	}
}
