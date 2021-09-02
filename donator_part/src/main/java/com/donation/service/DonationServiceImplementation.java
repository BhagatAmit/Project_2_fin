package com.donation.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.validation.annotation.Validated;

import com.donation.model.Donation;
import com.donation.model.User;
import com.donation.repository.DonationRepository;
import com.donation.repository.UserRepository;
import com.sun.istack.NotNull;
@Validated
@Service
public class DonationServiceImplementation implements DonationService{
	
	private DonationRepository donationRespository;
	private UserRepository userRepository;
	@Autowired
	public DonationServiceImplementation(DonationRepository donationRespository, UserRepository userRepository) {
		super();
		this.donationRespository = donationRespository;
		this.userRepository = userRepository;
	}


	/*
	 * @Autowired public DonationServiceImplementation(DonationRepository
	 * donationRespository) { super(); this.donationRespository =
	 * donationRespository; }
	 */
	
	
	  @Override public Donation createDonation(@NotNull  Donation customer) { return
	 donationRespository.save(customer);
	  }
	 

	/*
	 * @Autowired public DonationServiceImplementation(UserRepository
	 * userRepository) { this.userRepository = userRepository; }
	 */
	@Override
	public List<Donation> getDonations() {
		return donationRespository.findAll();
	}
	@Override
	public Optional<Donation> getDonationById(int dId) {
		return donationRespository.findById(dId);
	}
	@Override
	public Donation updateDonation(@NotNull Donation donation) {
		return donationRespository.save(donation);
	}
	@Override
	public void deleteDonation(@NotNull int dId) {
		donationRespository.deleteById(dId);
		
	}
	@Override
	public User createUser(@NotNull User user) {
		
		return userRepository.save(user);
		
	}


	@Override
	public User fetchUserByemailAndPassword(String tempEmail, String tempPassword) {
		return userRepository.findByEmailAndPassword(tempEmail,tempPassword);
		
	}


	
		
	




	


	
}
