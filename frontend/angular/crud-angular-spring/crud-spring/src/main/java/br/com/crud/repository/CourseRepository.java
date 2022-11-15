package br.com.crud.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import br.com.crud.model.Course;

@Repository
public interface CourseRepository extends JpaRepository<Course, Long> {

	@Query(value = "SELECT * FROM EMPRESA WHERE EMPRESA_STATUS >= 0", nativeQuery = true)
	List<Course> buscarEmpresasAtivas();

	@Query(value = "SELECT * FROM EMPRESA WHERE EMPRESA_ID = :id AND EMPRESA_STATUS >= 0", nativeQuery = true)
	Optional<Course> buscarEmpresaAtivasPorId(int id);

	@Modifying
	@Transactional
	@Query(value = "UPDATE empresa SET empresa_status = -1 WHERE empresa_id = :id", nativeQuery = true)
	void apagarEmpresaPorId(@Param("id") Integer id);

	@Modifying
	@Transactional
	@Query(value = "UPDATE empresa SET empresa_status = 0 WHERE empresa_id = :id", nativeQuery = true)
	void desativarEmpresaPorId(@Param("id") Integer id);

}
