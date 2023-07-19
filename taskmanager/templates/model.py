from taskmanager import db


class Category(db.Model):
    # schema for the Category model
    id = db.Column(db.Integer, primary_key=True)
    category_name = db.Column(db.String(25), unique=True, nullable=False)

    def __repr__(self):
        # to represent itself as a string
        return self.category_name


class Task(db.Model):
    # schema for the Category model
    id = db.Column(db.Integer, primary_key=True)
    task = db.Column(db.String(50), unique=True, nullable=False)
    task_description = db.Column(db.Text, nullable=False)
    is_urgent = db.Column(db.Boolean, default=False, nullable=False)
    due_date = db.Column(db.Date, nullable=False)
    category_id = db.Column(db.Integer, db.ForeignKey(), nullable=False)

    def __repr__(self):
        # to represent itself as a string
        return self.task_name
