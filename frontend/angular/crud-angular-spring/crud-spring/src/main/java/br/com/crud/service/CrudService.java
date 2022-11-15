package br.com.crud.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import br.com.crud.exception.CourseNotFoundException;
import br.com.crud.model.Course;
import br.com.crud.repository.CourseRepository;

@Service
public class CrudService {
	private final CourseRepository empresaRepository;

	@Autowired
	public CrudService(CourseRepository empresaRepository) {
		this.empresaRepository = empresaRepository;
	}
	
	public Course adicionarEmpresa(Course empresa) {
		return empresaRepository.save(empresa);
	}
	
	public Course atualizarEmpresa(Course empresa) {
		return empresaRepository.save(empresa);
	}
	
	public void apagarEmpresa(int id) {
		empresaRepository.apagarEmpresaPorId(id);
	}
	
	public Course buscaEmpresabyId(int id) {
		return empresaRepository.buscarEmpresaAtivasPorId(id)
			.orElseThrow(() -> new CourseNotFoundException ("Empresa id "+ id + "não foi encontrada!"));
	}
	
	public List<Course> buscarEmpresasAtivas(){
		return empresaRepository.buscarEmpresasAtivas();
	}
}
