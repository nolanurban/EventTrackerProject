package com.skilldistillery.gooutside.services;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.skilldistillery.gooutside.entities.Activity;
import com.skilldistillery.gooutside.entities.Daily;
import com.skilldistillery.gooutside.repositories.DailyRepository;

@Service
public class DailyServiceImpl implements DailyService {

	@Autowired 
	private DailyRepository dailyRepo;

	@Override
	public List<Daily> listAllDays() {
		return dailyRepo.findAll();
	}

	@Override
	public Daily findDayId(int id) {
		return dailyRepo.findById(id).get();
	}

	@Override
	public Daily findDayByDate(LocalDate date) {
		return dailyRepo.findByDate(date);
	}

	@Override
	public Daily addDailyActivity(Daily day) {
		return dailyRepo.save(day);
	}

	@Override
	public boolean removeDailyActivity(Daily day) {
		boolean isTrue = false;
		int id = day.getId();
		dailyRepo.delete(day);
		if (dailyRepo.findById(id) == null) 
			isTrue = true;
		
		return true;
	}

	@Override
	public Daily updateDaily(Daily day) {

		Daily updateDay = findDayId(day.getId());
		updateDay.setDescription(day.getDescription());
		updateDay.setImageUrl(day.getImageUrl());
		updateDay.setDate(day.getDate());
		updateDay.setUser(day.getUser());
		updateDay.setActivity(day.getActivity());
		dailyRepo.save(updateDay);
		return updateDay;
		
	}

	@Override
	public List<Daily> findAllDaysByActivity(int id) {
		
		return dailyRepo.findDailyByActivityId(id);  // test run
//		List<Daily> daily = dailyRepo.findAll();
//		List<Daily> returnList = new ArrayList<>();
//		for (Daily d : daily) {
//			if (d.getActivity().getId() == activity.getId()) {
//				returnList.add(d);
//			}
//		}
//		return returnList;
	}
}
