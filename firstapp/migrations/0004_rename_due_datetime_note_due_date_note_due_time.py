# Generated by Django 4.2.7 on 2024-04-23 06:48

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('firstapp', '0003_rename_due_date_note_due_datetime_alter_folder_notes_and_more'),
    ]

    operations = [
        migrations.RenameField(
            model_name='note',
            old_name='due_datetime',
            new_name='due_date',
        ),
        migrations.AddField(
            model_name='note',
            name='due_time',
            field=models.TimeField(blank=True, null=True),
        ),
    ]
