package com.skilldistillery.gooutside.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.skilldistillery.gooutside.entities.Activity;
import com.skilldistillery.gooutside.entities.User;
import com.skilldistillery.gooutside.repositories.ActivityRepository;
import com.skilldistillery.gooutside.repositories.UserRepository;

@Service
public class ActivityServiceImpl implements ActivityService {
	
	@Autowired
	private  ActivityRepository actRepo;
	@Autowired
	private UserRepository userRepo;
	
	@Override
	public List<Activity> findAllActivities() {
		return actRepo.findAll();
	}

	@Override
	public Activity addActivity(Activity activity) {
		actRepo.save(activity);
		return activity;
	}

	@Override
	public Activity findActivityById(int id) {
		return actRepo.findById(id).get();
	}

	@Override
	public Activity update(int id, Activity activity) {
		Activity newAct = findActivityById(id);
		newAct.setName(activity.getName());
		actRepo.save(newAct);
		return activity;
	}

	@Override
	public boolean deleteActivity(int id) {
		boolean isTrue = false;
		Activity targetActivity = actRepo.findById(id).get();
		actRepo.delete(targetActivity);
		if (actRepo.findById(id).get() == null) isTrue = true;
		
		return isTrue;
	}

}
