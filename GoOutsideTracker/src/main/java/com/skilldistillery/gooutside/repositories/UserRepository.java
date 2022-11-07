package com.skilldistillery.gooutside.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.skilldistillery.gooutside.entities.User;

public interface UserRepository extends JpaRepository<User, Integer> {

}
