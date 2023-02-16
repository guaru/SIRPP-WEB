pipeline {
    agent any
    
    stages {
        stage('Build') {
            steps {
                bat 'npm install'
            }
        }
        stage('Lint') {
            steps {
                bat 'ng lint'
            }
        }
        stage('Unit test and coverage') {
            steps {
                bat 'npx jest --coverage'
            }
        }
    }   
}