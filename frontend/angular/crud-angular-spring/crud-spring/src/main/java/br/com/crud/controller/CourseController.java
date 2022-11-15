package br.com.crud.controller;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
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

	@GetMapping("/{id}")
//	@RequestMapping(method = RequestMethod.GET)
	public ResponseEntity<Course> readById(@PathVariable Long id) {
		return courseRepository.findById(id).map(recordFound -> ResponseEntity.ok().body(recordFound))
				.orElse(ResponseEntity.notFound().build());
	}

	@PutMapping("/{id}")
	public ResponseEntity<Course> update(@PathVariable Long id, @RequestBody Course course) {
		return courseRepository.findById(id).map(recordFound -> {
			recordFound.setName(course.getName());
			recordFound.setCategory(course.getCategory());
			Course updated = courseRepository.save(recordFound);
			return ResponseEntity.ok().body(updated);
		}).orElse(ResponseEntity.notFound().build());
	}

	@DeleteMapping("/{id}")
	public ResponseEntity<Void> delete(@PathVariable Long id) {
		return courseRepository.findById(id).map(recordFound -> {
			courseRepository.deleteById(id);
			return ResponseEntity.noContent().<Void>build();
		}).orElse(ResponseEntity.notFound().build());
	}
}
