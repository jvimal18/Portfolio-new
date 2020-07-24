from tinydb import TinyDB, Query
from tinydb.operations import increment

# Initialize DB

class SiteData(TinyDB):

    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        self.companies = self.table("organizational_details")
        self.personalDetails = self.table("personal_details")
        self.technicalKnowledge = self.table("technical_knowledge")
        self.personalProjects = self.table("personal_projects")
        self.credit = self.table("credits")
        self.socialMedia = self.table("socialmedia")
    

class BlogData(TinyDB):

    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        self.query = Query()


    def get_all(self):
        result = []
        for table in self.tables():
            category = {}
            category['name'] = table
            category['content'] = self.table(table).all()
            result.append(category)
        return result

    def increment_views(self, table, iid):
        table = self.table(table)
        table.update(increment("views"), self.query.id == iid)
        return table.get(self.query.id == iid)
    
    def add_meta(self, category, meta):
        table = self.table(category)
        table.upsert(meta, self.query.id == meta['id'])
    
    def get_meta(self, category, iid):
        table = self.table(category)
        return table.get(self.query.id == iid)
    
    def delete_meta(self, category, iid):
        table = self.table(category)
        return table.remove(self.query.id == iid)

