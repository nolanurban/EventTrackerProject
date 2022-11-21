package com.skilldistillery.gooutside.controllers;

import java.util.List;

import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.skilldistillery.gooutside.entities.Daily;
import com.skilldistillery.gooutside.services.DailyService;

@RestController
@RequestMapping("api")
@CrossOrigin({"*", "http://localhost:8083/"})
public class DailyController {

	@Autowired 
	private DailyService dailySvc;

	@GetMapping("daily")
	List<Daily> showAllDays() {
		System.out.println("Trying to execute show all days");
		return dailySvc.listAllDays();
	}
	
	@PostMapping("daily/newactivity")
	Daily addNewDailyActivity(@RequestBody Daily daily, HttpServletResponse res) {
		try {
		daily = dailySvc.addDailyActivity(daily);
		res.setStatus(201);
		} catch (Exception e) {
			e.printStackTrace();
			res.setStatus(400);
			daily = null;
		}
		return daily;
	}
	
	@GetMapping("daily/{id}") 
	Daily retrieveDailyById(@PathVariable int id, HttpServletResponse res) {
		Daily daily = dailySvc.findDayId(id);
		if (daily == null) { 
			res.setStatus(404);
		}
		return daily;
	
	}
	@PutMapping("daily/{id}") 
	Daily updateDailyById(@PathVariable int id, @RequestBody Daily daily, HttpServletResponse res) {
		try {
			daily = dailySvc.updateDaily(id, daily);
			if (daily == null) {
				res.setStatus(404);
			}
		} catch (Exception e) {
			e.printStackTrace();
			res.setStatus(400);
			daily = null;
		}
		return daily;
	} 
	@DeleteMapping("daily/{id}")
	public void removeDailyById(@PathVariable int id, HttpServletResponse res) {
		System.out.println("in the controller, id is : " + id);
		try {
			dailySvc.removeDailyActivity(id);
//			if (dailySvc.removeDailyActivity(id)) {
//				System.out.println("Removal of entry # " + id + " complete");
//				res.setStatus(204);
//			}
//			else { 
//				System.out.println("There was an error removing entry # " + id);
//				res.setStatus(404);
//			}
		} catch (Exception e) {
			e.printStackTrace();
			res.setStatus(400);
		}
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
