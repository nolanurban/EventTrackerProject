package com.skilldistillery.gooutside.services;

import java.util.List;

import com.skilldistillery.gooutside.entities.Activity;
import com.skilldistillery.gooutside.entities.User;

public interface UserService {

	List<User> findAllUsers();
	User createUser(User user);
	User findUserId(int id);
	User updateUser(User user);
	boolean removeUser(User user);
}
