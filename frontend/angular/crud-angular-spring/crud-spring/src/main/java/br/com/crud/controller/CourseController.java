package br.com.crud.controller;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import br.com.crud.model.Course;
import br.com.crud.repository.CourseRepository;
import lombok.AllArgsConstructor;

@RestController
@RequestMapping("/api/courses")
@AllArgsConstructor
public class CourseController {

	private final CourseRepository courseRepository;

	@PostMapping
    @ResponseStatus(code = HttpStatus.CREATED)
	public Course create(@RequestBody Course course) {
		return courseRepository.save(course);
	       // return ResponseEntity.status(HttpStatus.CREATED)
        // .body(courseRepository.save(course));
	}

	@GetMapping
//	@RequestMapping(method = RequestMethod.GET)
	public @ResponseBody List<Course> readAll() {
		return courseRepository.findAll();
	}

}
