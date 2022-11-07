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
		userRepo.save(user);
		return user;
	}

	@Override
	public User findUserId(int id) {
		return userRepo.findById(id).get();
	}

	@Override
	public User updateUser(User user) {
		User updateUser = findUserId(user.getId());
		updateUser.setUsername(user.getUsername());
		updateUser.setPassword(user.getPassword());
		userRepo.save(user);
		return updateUser;
	}

	@Override
	public boolean removeUser(User user) {
		boolean isTrue = false;
		userRepo.delete(user);
		if (findUserId(user.getId()) == null) isTrue = true;
		return isTrue;
	}

}
