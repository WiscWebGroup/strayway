pipeline {
    agent any

    stages {
        stage('Initialize') {
            steps {
                echo 'Initializing....'
            }
        }

        stage('Stop Old Frontend') {
            steps {
                sh 'fuser -k -n tcp 7890 true'
            }
        }
        
        stage('Build Frontend and Deploy') {
            steps {
                dir('/home/ubuntu/strayway') {
                    sh 'npm install'
                    sh 'npm run build'
                    sh 'JENKINS_NODE_COOKIE=dontKillMe nohup node serveProduction.cjs > /home/ubuntu/strayway/strayway_interstaging.log 2>1&'
                }
            }
        }
        
        stage('Finish') {
            steps {
                echo 'Finished.'
            }
        }
        
    }
}
