FROM 174522763890.dkr.ecr.us-east-1.amazonaws.com/ubuntu--onbuild:latest
USER root
RUN npm run build
COPY client/ /app/client
USER app
EXPOSE 5000 5001
