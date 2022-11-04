package com.skilldistillery.gooutside.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.skilldistillery.gooutside.entities.Activity;
import com.skilldistillery.gooutside.services.ActivityService;

@RestController
@RequestMapping("api")
public class ActivityController {

	@Autowired 
	private ActivityService actServ;
	
	@GetMapping("activities/showall")
	public List<Activity> showAllActivities() {
		return actServ.findAllActivities();
	}
	@GetMapping("activities/{id}")
	public Activity findActivityById(@PathVariable int id) {
		return actServ.findActivityById(id);
	}
}
