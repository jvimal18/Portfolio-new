import os
import datetime
import shutil

CACHE_DIR = "./cache"

if not os.path.exists(CACHE_DIR):
    os.makedirs(CACHE_DIR)

class Cache:

    def __init__(self):
        self.idx = {}

    
    def reset_cache(self):
        shutil.rmtree(CACHE_DIR)
        os.makedirs(CACHE_DIR)
        
    
    def cache_path(self, name, ext):
        return f'{CACHE_DIR}/{name}.{ext}'


    def save_cache(self, filename, data, extension):
        filePath = self.cache_path(filename, extension)
        if os.path.isfile(filePath):
            return True
        with open(filePath, 'w+') as file:
            file.writelines(data)
    

    def get_cache(self, filename, extension):
        filePath = self.cache_path(filename, extension)

        if os.path.isfile(filePath):
            with open(filePath, 'r') as file:
                data = file.read()
            return data



    