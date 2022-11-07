package com.skilldistillery.gooutside.services;

import java.time.LocalDate;
import java.util.List;

import com.skilldistillery.gooutside.entities.Activity;
import com.skilldistillery.gooutside.entities.Daily;

public interface DailyService {
	List<Daily> listAllDays();
	Daily findDayId(int id);
	Daily findDayByDate(LocalDate date);	
	Daily addDailyActivity(Daily day);
	boolean  removeDailyActivity(Daily day);
	Daily updateDaily(Daily day);
	List<Daily> findAllDaysByActivity(int id);
	
}
