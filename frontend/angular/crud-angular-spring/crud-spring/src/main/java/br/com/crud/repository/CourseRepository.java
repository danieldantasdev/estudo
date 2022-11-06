package br.com.crud.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import br.com.crud.model.Course;

@Repository
public interface CourseRepository extends JpaRepository<Course, Long> {
	
}
