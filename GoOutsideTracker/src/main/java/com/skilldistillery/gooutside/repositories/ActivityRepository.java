package com.skilldistillery.gooutside.repositories;


import org.springframework.data.jpa.repository.JpaRepository;

import com.skilldistillery.gooutside.entities.Activity;

public interface ActivityRepository extends JpaRepository<Activity, Integer> {

}
