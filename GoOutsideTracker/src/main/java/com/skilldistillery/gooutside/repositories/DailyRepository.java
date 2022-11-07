package com.skilldistillery.gooutside.repositories;

import java.time.LocalDate;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.skilldistillery.gooutside.entities.Daily;

public interface DailyRepository extends JpaRepository<Daily, Integer> {
	Daily findByDate(LocalDate date);
	List<Daily> findDailyByActivityId(int id); // I will play with this later
    List<Daily> findDailyByUserId(int id);
}
