package com.donation.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.donation.model.User;
@Repository
public interface UserRepository extends JpaRepository<User,String>{
	public User findByEmailAndPassword(String email,String password);
}
