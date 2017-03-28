from rest_framework import serializers

from tasks.models import Task
from accounts.api.v1.serializers import UserFullSerializer


class TaskSerializer(serializers.ModelSerializer):
    user_dev = UserFullSerializer(required=False)

    class Meta:
        model = Task
        fields = ('id', 'user_dev', 'dev_eta', 'status', 'label', 'description',)
        read_only_fields = ('id',)