pipeline {
    agent any
    
    stages {
        stage('Install') {
            steps {
                bat 'npm install'
            }
        }
        stage('Build') {
            steps {
                bat 'npm run build'
            }
        }
        stage('Unit Test') {
            steps {
                bat 'npm run test'
            }
        }
        stage('Static code anaysis') {
            steps {
                bat 'npm run lint'
            }
        }
        stage('Unit test and coverage') {
            steps {
                bat 'npx jest --coverage'
            }
        }
    }   
}