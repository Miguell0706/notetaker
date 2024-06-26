# Generated by Django 4.2.7 on 2024-04-22 23:45

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('firstapp', '0002_rename_important_note_pinned_alter_folder_user_and_more'),
    ]

    operations = [
        migrations.RenameField(
            model_name='note',
            old_name='due_date',
            new_name='due_datetime',
        ),
        migrations.AlterField(
            model_name='folder',
            name='notes',
            field=models.ManyToManyField(blank=True, related_name='notes', to='firstapp.note'),
        ),
        migrations.AlterField(
            model_name='note',
            name='folders',
            field=models.ManyToManyField(blank=True, related_name='folders', to='firstapp.folder'),
        ),
    ]
