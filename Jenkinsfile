pipeline {
    agent any

    environment {
        // Define environment variables as needed
    }

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Build and Test Frontend') {
            steps {
                script {
                    // Navigate to the frontend directory
                    dir('front-end') {
                        sh 'npm install'
                        sh 'npm test'
                        // Add any other build and test commands as needed
                    }
                }
            }
        }

        stage('Build and Test Backend') {
            steps {
                script {
                    // Navigate to the backend directory
                    dir('express_server') {
                        sh 'npm install'
                        sh 'npm test'
                        // Add any other build and test commands as needed
                    }
                }
            }
        }

        // stage('Database Setup') {
        //     steps {
        //         script {
        //             // Navigate to the backend directory and set up your database
        //             dir('backend') {
        //                 sh 'npm run db:migrate'
        //                 sh 'npm run db:seed'
        //                 // You may need to run database migration and seeding scripts
        //             }
        //         }
        //     }
        // }

        stage('Deployment') {
            steps {
                script {
                    // Deploy the application
                    dir('frontend') {
                        // Build the React front-end
                        sh 'npm run build'
                        // Copy the built files to a deployment location
                        sh 'rsync -avz build/ user@frontend-server:/path/to/deployment-directory'
                    }

                    dir('backend') {
                        // Deploy the Express.js back-end
                        // Copy necessary files and restart the server, if required
                    }
                }
            }
        }
    }

    post {
        success {
            // Add post-deployment actions, such as notifications or cleanup
        }
    }
}
