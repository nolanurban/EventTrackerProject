package com.skilldistillery.gooutside.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.skilldistillery.gooutside.entities.Activity;
import com.skilldistillery.gooutside.repositories.ActivityRepository;

@Service
public class ActivityServiceImpl implements ActivityService {
	
	@Autowired
	private  ActivityRepository actRepo;
	
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
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public boolean deleteActivity(int caveId) {
		// TODO Auto-generated method stub
		return false;
	}

}
