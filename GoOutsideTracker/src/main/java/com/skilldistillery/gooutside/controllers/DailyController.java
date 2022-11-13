package com.skilldistillery.gooutside.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.skilldistillery.gooutside.entities.Daily;
import com.skilldistillery.gooutside.services.DailyService;

@RestController
@RequestMapping("api")
public class DailyController {

	@Autowired 
	private DailyService dailySvc;

	@GetMapping("daily")
	List<Daily> showAllDays() {
		System.out.println("Trying to execute show all days");
		return dailySvc.listAllDays();
	}
	
	@PostMapping("daily/newactivity")
	Daily addNewDailyActivity(@RequestBody Daily daily) {
		dailySvc.addDailyActivity(daily);
		return daily;
	}
	
	@GetMapping("daily/{id}") 
	Daily retrieveDailyById(@PathVariable int id) {
			return dailySvc.findDayId(id);
	
	}
	
	@GetMapping("daily/walking")
	List<Daily> showWalkingDays() {
		return dailySvc.findAllDaysByActivity(1);
	}
	@GetMapping("daily/running")
	List<Daily> showRunningDays() {
		return dailySvc.findAllDaysByActivity(2);
	}
	@GetMapping("daily/hunting")
	List<Daily> showHuntingDays() {
		return dailySvc.findAllDaysByActivity(3);
	}
	@GetMapping("daily/fishing")
	List<Daily> showFishingDays() {
		return dailySvc.findAllDaysByActivity(4);
	}
	@GetMapping("daily/biking")
	List<Daily> showBikingDays() {
		return dailySvc.findAllDaysByActivity(5);
	}
	@GetMapping("daily/workout")
	List<Daily> showGymDays() {
		return dailySvc.findAllDaysByActivity(6);
	}
	@GetMapping("daily/shopping")
	List<Daily> showShoppingDays() {
		return dailySvc.findAllDaysByActivity(7);
	}
	@GetMapping("daily/driving")
	List<Daily> showDrivingDays() {
		return dailySvc.findAllDaysByActivity(8);
	}
	@GetMapping("daily/dating")
	List<Daily> showDateDays() {
		return dailySvc.findAllDaysByActivity(9);
	}
	@GetMapping("daily/discgolfing")
	List<Daily> showDiscGolfDays() {
		return dailySvc.findAllDaysByActivity(10);
	}
	@GetMapping("daily/basketball")
	List<Daily> showBasketballDays() {
		return dailySvc.findAllDaysByActivity(11);
	}
	@GetMapping("daily/archery")
	List<Daily> showArcheryDays() {
		return dailySvc.findAllDaysByActivity(12);
	}
	@GetMapping("daily/shooting")
	List<Daily> showShootingDays() {
		return dailySvc.findAllDaysByActivity(13);
	}
	@GetMapping("daily/skateboarding")
	List<Daily> showSkateboardingDays() {
		return dailySvc.findAllDaysByActivity(14);
	}
	@GetMapping("daily/swimming")
	List<Daily> showSwimmingDays() {
		return dailySvc.findAllDaysByActivity(15);
	}
	@GetMapping("daily/badminton")
	List<Daily> showBadmintonDays() {
		return dailySvc.findAllDaysByActivity(16);
	}
	@GetMapping("daily/pickleball")
	List<Daily> showPickleBallDays() {
		return dailySvc.findAllDaysByActivity(17);
	}
}
