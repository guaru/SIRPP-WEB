pipeline {
    agent any
    
    stages {
        stage('Build') {
            steps {
                bat 'npm install'
            }
        }
        stage('Test') {
            steps {
                bat 'npm test'
            }
        }
        stage('Lint') {
            steps {
                bat 'npm run-script lint'
            }
        }
        stage('Unit test and coverage') {
            steps {
                bat 'npx jest --coverage'
            }
        }
    }   
}