# Use base image with git and nginx
FROM nginx:alpine

# Install git
RUN apk update && apk add git

# Set working directory
WORKDIR /usr/share/nginx/html

# Clone repo (replace with your repo)
RUN git clone https://github.com/YOUR_USERNAME/YOUR_REPOSITORY.git temp \
    && cp -r temp/* . \
    && rm -rf temp

# Expose port 80
EXPOSE 80

# Start nginx
CMD ["nginx", "-g", "daemon off;"]
