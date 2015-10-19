from django.test import TestCase
from django.test import Client


class ContatoTestCase(TestCase):

    def test_url(self):
        """Animals that can speak are correctly identified"""
        c = Client()
        response = c.post('/contato/', {'username': 'john', 'password': 'smith'})
        self.assertEqual(response.status_code, 200)