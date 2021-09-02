package com.donation.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.donation.model.Donation;
@Repository
public interface DonationRepository 
extends JpaRepository<Donation, Integer> {
	//28 methods
}
