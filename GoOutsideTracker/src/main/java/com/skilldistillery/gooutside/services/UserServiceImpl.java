package com.skilldistillery.gooutside.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.skilldistillery.gooutside.entities.Activity;
import com.skilldistillery.gooutside.entities.User;
import com.skilldistillery.gooutside.repositories.UserRepository;

@Service
public class UserServiceImpl implements UserService {

	@Autowired 
	private UserRepository userRepo;

	@Override
	public List<User> findAllUsers() {
		return userRepo.findAll();
	}

	@Override
	public User createUser(User user) {
		userRepo.saveAndFlush(user);
		return user;
	}

	@Override
	public User findUserId(int id) {
		System.out.println("Looking for user # " + id);
		return userRepo.findById(id).get();
	}

	@Override
	public User updateUser(int id, User user) {
		User updateUser = findUserId(id);
		if (user.getUsername() != null)
			updateUser.setUsername(user.getUsername());
		if (user.getPassword() != null)
		updateUser.setPassword(user.getPassword());
		userRepo.save(updateUser);
		return updateUser;
	}

	@Override
	public boolean removeUser(int id) {
		boolean isTrue = false;
		User user = findUserId(id);
		userRepo.delete(user);
		try {
			findUserId(user.getId());
		
		} catch (Exception e) {
			isTrue = true;
		}
		return isTrue;
	}

}
