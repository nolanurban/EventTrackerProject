package com.skilldistillery.gooutside.services;

import java.util.List;

import com.skilldistillery.gooutside.entities.Activity;

public interface ActivityService {

	List<Activity> findAllActivities();
	Activity addActivity(Activity activity);
	Activity findActivityById(int id);
	Activity update(int id, Activity activity);
	boolean deleteActivity(int caveId);
}
