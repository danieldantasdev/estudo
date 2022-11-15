package br.com.crud.exception;

public class CourseNotFoundException extends RuntimeException {

	private static final long serialVersionUID = 1L;

	public CourseNotFoundException(String mensagem) {
		super(mensagem);
	}
}
